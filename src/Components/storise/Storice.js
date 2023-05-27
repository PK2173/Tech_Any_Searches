import "./storice.css";
import { useGlobleContext } from "../context/Context";

export default function Storice() {
  const { isloding, hits, nbPages,removePost } = useGlobleContext();
  console.log(hits, nbPages);

  if (isloding) {
    return (
      <>
        <h1 className="Loder">Loding....</h1>
      </>
    );
  }

  return (
    <div className="mainContainer">
      {hits.map((currentpost) => {
        const { title, author, objectID, url, num_comments } = currentpost;
        return (
          <>
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> || <span>{num_comments}</span> comments
              </p>

              <div className="card-btn">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <a href="#" onClick={(e)=>{removePost(objectID)}}>Remove</a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
