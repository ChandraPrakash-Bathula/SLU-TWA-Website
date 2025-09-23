const VideoPlatform = () => {
  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() =>
          window.open(
            "http://slu-twa-s3-demo.s3-website.us-east-2.amazonaws.com/industrycard",
            "_blank"
          )
        }
      >
        View the Video Platform
      </button>
    </>
  );
};

export default VideoPlatform;
