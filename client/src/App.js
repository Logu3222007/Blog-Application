// App.js
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Authentication/Home.js";
import Register from "./Authentication/Register.js";
import Login from "./Authentication/Login.js";
import Dashboard from "./Container/Dashboard.js";
import AdminPage from "./Admin/AdminPage.js";
import RegularUserPage from "./Regular/RegularUserPage.js";
import AuthorPage from "./Author/AuthorPage.js";
import UserManagement from "./Admin/UserManagement.js";
import CommentManagement from "./Admin/CommentManagement.js";
import PostManagement from "./Admin/PostManagement.js";
import CategoryManagement from "./Admin/CategoryManagement.js";
import TagManagement from "./Admin/TagManagement.js";
import ExplorePosts from "./Regular/ExplorePosts.js";
import MyComments from "./Regular/MyComments.js";
import MyProfile from "./Regular/MyProfile.js";
import MyActivity from "./Regular/MyActivity.js";
import ManageComments from "./Author/ManageComments.js";
import CreatePost from "./Author/CreatePost.js";
import ManageMyPosts from "./Author/ManageMyPosts.js";
import NotFoundPage from "./Authentication/NotFoundPage.js";
import Footer from "./Container/Footer.js";
import TermsOfService from "./TermsOfService.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import EditProfile from "./Regular/EditProfile.js";
import ViewActivity from "./Regular/ViewActivity.js";
import ManagePosts from "./Author/ManagePosts.js";
import ViewComments from "./Author/ViewComments.js";
import ViewAllPosts from "./Regular/ViewAllPosts.js";
import ViewMyComments from "./Regular/ViewMyComments.js";
import AuthorExplorePost from "./Author/AuthorExplorePost.js";
import AuthorMyComments from "./Author/AuthorMyComments.js";
import AuthorMyProfile from "./Author/AuthorMyProfile.js";
import AuthorViewAllPost from "./Author/AuthorViewAllPost.js";
import AuthorEditProfile from "./Author/AuthorEditProfile.js";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./Container/Header.js";
import { ThemeProvider } from "./ThemeContext.js";
import './index.css'
import FullBlogPost from "./Author/FullBlogPost.js";
import ViewAllPostsId from "./Regular/ViewAllPostsId.js";
import AuthorAllActivities from "./Author/AuthorAllActivities.js";
import { jwtDecode } from "jwt-decode";
import RegularHeader from "./Container/RegularHeader.js";
import RedirectIfAuthenticated from "./Authentication/RedirectIfAuthenticated .js";


function App() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role); // Assuming your token has a 'role' field
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  const renderHeader = () => {
    if (role === "author") {
      return <Header />;
    }
     else {
      return <RegularHeader />; // Default header for unauthenticated users
    }
  };

  return (
    <ThemeProvider>
    <div>
      {renderHeader()}
      <main className="container mt-4">
        <Routes>
          <Route path="/register" element={<Register />} />
<Route path="/login" element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>} />
          {/* Public Routes */}
          <Route path="/exploreposts" element={<ExplorePosts />} />
          <Route path="/viewallposts" element={<ViewAllPosts />} />
          <Route path="/viewmycomments" element={<ViewMyComments />} />

          {/* Protected Routes for Regular User */}
          <Route
            path="/regular"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <RegularUserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mycomments"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <MyComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myactivity"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <MyActivity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editprofile"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewactivity"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <ViewActivity />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usermanagement"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/commentmanagement"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CommentManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postmanagement"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <PostManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categorymanagement"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CategoryManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tagmanagement"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <TagManagement />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Author */}
          <Route
            path="/author"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createpost"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/managemypost"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <ManageMyPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/managecomments"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <ManageComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/managepost"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <ManagePosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewcomments"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <ViewComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authorexplorepost"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorExplorePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authormycomments"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorMyComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authormyprofile"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorMyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authorviewallposts"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorViewAllPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authoreditprofile"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorEditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fullblogpost/:id"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <FullBlogPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewallpostsid/:id"
            element={
              <ProtectedRoute allowedRoles={["regular"]}>
                <ViewAllPostsId />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authorallactivities"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorAllActivities />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
