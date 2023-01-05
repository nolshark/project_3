import React from "react";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function downvote() {
    alert('downvote');
  }

// Usage
<Button onClick={downvote}></Button>