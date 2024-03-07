import NotFound404 from "../assets/NotFound404.jpg";

function NotFound() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="notfound">
      <div className="gradientBg rounded-xl md:p-9 px-4 py-9">
        <div className="grid justify-items-center">
          <img src={NotFound404} className="rounded-lg h-96" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
