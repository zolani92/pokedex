import React from "react";

const PokeRow = ({ pokemon: { id, name, types, likesCount } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name.toUpperCase()}</td>
      <td>{types.join(", ")}</td>
      <td>{likesCount || 0}</td>
      <td>
        <button className="btn btn-secondary">Display</button>
      </td>
    </tr>
  );
};

export default PokeRow;
