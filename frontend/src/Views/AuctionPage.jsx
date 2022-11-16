import Auctionmain from "../Components/Auctionmain";
import PleaseLogin from "../Components/PleaseLogin";
//single auctionpage

export default function AuctionPage() {
  return (
    <>
      {window.sessionStorage.getItem("user") ? (
        <Auctionmain />
      ) : (
        <PleaseLogin />
      )}
    </>
  );
}
