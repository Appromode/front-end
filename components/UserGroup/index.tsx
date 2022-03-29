import React, { useContext } from 'react';
import Link from 'next/link';
import { getGroup } from '../../api/users';
import AuthContext from '../../stores/AuthContext';

const UserGroup = () => {
  const { user } = useContext(AuthContext);

  const { group } = getGroup(user.nameid);

  return (
    <>
      <h2 className="text-3xl mb-5">Group</h2>
      {
        group?.length < 0 ? (
          group.map((userGroup) => (
            <div key={userGroup.groupId}>
              <p className="font-semibold text-prussian mb-3">{userGroup.groupName}</p>
              <Link href={`/group/${userGroup.groupId}`}>
                <p className="cursor-pointer my-2">View Group</p>
              </Link>
            </div>
          ))
        ) : <div>Not in a group</div>
      }
    </>
  );
};

export default UserGroup;
