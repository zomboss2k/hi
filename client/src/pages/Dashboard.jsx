import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
// import ChatDisplay from "../components/ChatDisplay";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies] = useCookies(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [user]);

  const updatedMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:5000/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updatedMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  // const outOfFrame = (name) => {
  //   console.log(name + " left the screen!");
  // };

  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);

  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser.user_id)
  );

  console.log(genderedUsers);
  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {genderedUsers?.map((genderedUsers) => (
                <TinderCard
                  className="swipe"
                  key={genderedUsers.first_name}
                  onSwipe={(dir) => swiped(dir, genderedUsers.user_id)}
                  // onCardLeftScreen={() => outOfFrame(genderedUsers.first_name)}
                >
                  <div
                    style={{
                      backgroundImage: "url(" + genderedUsers.url + ")",
                    }}
                    className="card"
                  >
                    <h1>{genderedUsers.first_name}</h1>
                  </div>
                </TinderCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
