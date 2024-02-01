import Button from "./Button";

const Card = () => {
  return (
    <div className="card">
      <img src="./src/assets/images/precious-avatar.jpg" alt="" />
      <h2>Amaechi Precious</h2>
      <p className="location">Calabar, Cross River, Nigeria</p>

      <p>"Fullstack developer and avid reader."</p>

      <Button link="https://github.com/precious-c" text="Github" />
      <Button
        link="https://https://www.frontendmentor.io/profile/Precious-c"
        text="Frontend Mentor"
      />
      <Button link="https://www.linkedin.com/in/precious-amaechi-983282217" text="Linkedln" />
      <Button link="https://twitter.com/chinagorom_1" text="X(Twitter)" />
      <Button link="https://instagram.com/mazi_ryder" text={"Instagram"} />
    </div>
  );
};

export default Card;
