import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { getUserTags, removeUserTag } from '../../api/users';
import AuthContext from '../../stores/AuthContext';
import useMatchMutate from '../../utils/useMatchMutate';

const UserTags: FC = () => {
  const matchMutate = useMatchMutate();

  const { user } = useContext(AuthContext);

  const { userTags } = getUserTags(user.nameid);

  return (
    <div className="w-full">
      <h2 className="text-4xl mb-5">Tags</h2>
      <div className="overflow-x-auto mb-5">
        {
          userTags?.length > 0 ? (
            userTags.map((tag) => (
              <span
                className="bg-prussian text-white p-3 mr-3 rounded-md inline-block"
                key={tag.tagName}
              >
                <span className="mr-3">
                  {tag.tagName}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const tagId = typeof tag.tagId === 'string' ? (
                      +tag.tagId
                    ) : tag.tagId;

                    removeUserTag({
                      userId: user.nameid,
                      tagId,
                    })
                      .finally(() => matchMutate());
                  }}
                >
                  <Image
                    src="/dashboard/cross.svg"
                    width={15}
                    height={15}
                  />
                </button>
              </span>
            ))
          ) : (
            <div>No Tags</div>
          )
        }
      </div>
    </div>
  );
};

export default UserTags;
