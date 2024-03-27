import classes from "./Story.module.css";

const Story = () => {
  const cardsData = [
    { className: classes.profile, text: "Your Profile" },
    { className: classes.person, text: "Mario Bozidarovski" },
    { className: classes.personThird, text: "Creative Hub" },
    { className: classes.istoProgramiranje, text: "Success" },
  ];

  return (
    <div className={classes.content}>
      {cardsData.map((card, index) => (
        <div className={classes.card} key={index}>
          <div className={card.className}>
            <p className={classes.text}>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
