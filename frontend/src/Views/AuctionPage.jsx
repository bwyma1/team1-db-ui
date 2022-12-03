import Auctionmain from "../Components/Auctionmain";
import PleaseLogin from "../Components/PleaseLogin";
//single auctionpage
// this displays the single auction of a certain auctionID and allows it to access a context
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
