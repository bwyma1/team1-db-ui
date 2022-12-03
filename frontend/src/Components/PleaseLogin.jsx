
//Login block to prevent people not logged in from trying to bid on auctions
export default function PleaseLogin() {
  return (
    <a className="fs-6" href="/login">
      Please Login to Use this Feature
    </a>
  );
}
