import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ExplorePosts() {
  const [ViewAllPosts,setViewAllPosts]=useState([])
  const navigate=useNavigate()
  const HandleViewAllPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}authorviewallposts`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setViewAllPosts(res.data.GetViewAllPosts);
    } catch (err) {
      toast.error("Failed to fetch posts. Please try again.");
    }
  };
  useEffect(()=>{
    HandleViewAllPosts()
  },[])

  return (
    <div className="container mt-4">
      <h2>Explore Posts</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Browse and Read Posts</h5>
              <p className="card-text">Explore a variety of posts from authors on different topics.</p>
              <Link to={'/viewallposts'}>
              <button className="btn btn-primary" >
                View All Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">

     
    
      

</div>
<button className="back-button btn btn-primary mb-1" onClick={() => navigate('/regular')}>
             &larr; Back
           </button>
    </div>
  );
}

export default ExplorePosts;
