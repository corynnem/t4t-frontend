import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const T4T = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "1%", backgroundColor: 'rgba(183, 189, 216, 0.9)', padding: '1%', width: '90%', marginLeft: '7%', maxHeight: '1000vh', borderRadius: '30px', minHeight: '85vh' }}>
      <h1 style={{backgroundColor: 'black', borderRadius: '10px'}}>Welcome to T4T</h1>

      <p style={{ width: '80vw', marginLeft: '3vw', padding: '10%'}} >
        A trans (and nonbinary?) dating app. We created this to help trans folks
        have a safe platform to meet new people. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facere optio corrupti laudantium odit
        numquam nulla obcaecati at provident ea enim sint dolore ipsum quisquam
        voluptates rem quaerat earum, voluptatum molestias accusamus nisi. Earum
        nesciunt quod dolores officia, nisi sunt eum voluptates distinctio,
        nulla quaerat assumenda atque. Reprehenderit, modi aspernatur. Omnis
        corrupti nisi exercitationem odio hic? Soluta praesentium et quidem
        quasi quisquam? Tenetur cumque possimus, explicabo temporibus impedit
        maiores ullam omnis tempore architecto molestias laborum, porro repellat
        quia neque. Id iusto repellendus, asperiores dolorum cum voluptatem
        pariatur ratione harum labore molestias facilis nulla, cumque quae, a
        recusandae nobis non? Nemo, eveniet.
      </p>

      <a href="http://localhost:3000/auth">
        <Button color="inherit" variant="outlined">
          Sign up / Login
        </Button>
      </a>
    </div>
  );
};

export default T4T;
