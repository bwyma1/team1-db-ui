import "./ProfileHeader.css";
export default function ProfileHeader()
{
    const fname = "Kendall";
  const lname = "Boesch";
  const username = "kendall.boeschh";
  const bio = "~bio~";


  return (
    

    <div class="profileHeader">
      <span class=" profileHeaderContainer ui fixed">
        <img
          class="image profilePic"
          src="https://via.placeholder.com/150x150"
          alt="temporary profile pic"
        />

        <section class="profileInfoContainer">
          <h1 class="nameHeader ui ">
            {fname} {lname}
          </h1>
          <section class="UserAndBio">
            <h2 class="username ui">
              @{username}
            </h2>
            <p class="bio ui">
              {bio}
            </p>
          </section>
        </section>
      </span>
      <br />
  

    </div>
  );
}