import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProp {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProp["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProp) => {
  return (
    <form>
      {/*setParams(Object.assign({}, params, {name: env.target.value}))*/}
      <input
        type="text"
        value={param.name}
        onChange={(env) =>
          setParam({
            ...param,
            name: env.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(env) =>
          setParam({
            ...param,
            personId: env.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
