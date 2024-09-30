import { useEffect, useState } from 'react';
import { getUserInfo } from '../../Api';
import { user } from '../../Model/User';
import { Input } from '../Input/styles';

interface Users {
  data: user[];
}

function User() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();

        if (isUsersResponse(response)) {
          setUsers([response]); // Note que estamos colocando a resposta em um array
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isUsersResponse = (obj: any): obj is Users => {
    return 'data' in obj && Array.isArray(obj.data);
  };

  return (
    <>
      <div>
        {/* Renderizar a lista de usuários ou fazer algo com os dados */}
        {users.map((userResponse) =>
          userResponse.data.map((user) => (
            <>
              <div key={user.id}>{user.name}</div>
              <img src={user.avatar} />
            </>
          ))
        )}
      </div>
      <Input/>
    </>
  );
}

export default User;