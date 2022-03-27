import React, { useContext } from 'react';
import { getGroup } from '../../api/users';
import AuthContext from '../../stores/AuthContext';
import useHasMounted from '../../utils/useHasMounted';

const UserGroup = () => {
  const hasMounted = useHasMounted();
  const { user } = useContext(AuthContext);

  const { group } = getGroup(user.nameid);

  console.log('Group', group);

  return hasMounted && (
    <>
      <h2 className="text-3xl mb-5">Group</h2>
      {
        group ? (
          <div>
            <p>{group.groupName}</p>
          </div>
        ) : <div>Not in a group</div>
      }
    </>
  );
};

export default UserGroup;
