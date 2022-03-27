import React, { useContext } from 'react';
import { getGroup } from '../../api/users';
import AuthContext from '../../stores/AuthContext';

const UserGroup = () => {
  const { user } = useContext(AuthContext);

  const { group } = getGroup(user.nameid);

  return (
    <>
      <h2 className="text-3xl mb-5">Group</h2>
      {
        group ? (
          group.map((userGroup) => (
            <div>
              <p>{userGroup.groupName}</p>
            </div>
          ))
        ) : <div>Not in a group</div>
      }
    </>
  );
};

export default UserGroup;
