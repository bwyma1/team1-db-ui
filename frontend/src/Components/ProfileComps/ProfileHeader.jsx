import "./ProfileHeader.css";
export default function ProfileHeader(props)
{
  return (
    //make photo inline block!

    <div class="profileHeader">
      <span class=" profileHeaderContainer ui fixed">
        <img
          class="image profilePic"
          src={props.imageUrl}
          alt="temporary profile pic"
        />

        <section class="profileInfoContainer">
          <h1 class="nameHeader ui ">
            {props.name}
          </h1>
          <section class="UserAndBio">
            <h2 class="username ui">
              @{props.id}
            </h2>
            <p class="bio ui">
              {props.bio}
            </p>
          </section>
        </section>
      </span>
      <br />
  

    </div>
  );
}