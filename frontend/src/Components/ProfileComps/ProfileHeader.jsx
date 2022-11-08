
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
          <section id="UserAndBio">
            <h2 id="username" class="ui">
              @{username}
            </h2>
            <p id="bio" class="ui">
              {bio}
            </p>
          </section>
        </section>
      </span>
      <br />
  

    </div>
  );
}