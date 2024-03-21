import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Card, Button, Badge } from "tailwind-react-ui";
function Dashboard() {
  // Define the Card component
  function Card({ children, title, footer }) {
    return (
      <div className="card">
        {title && <div className="card-header">{title}</div>}
        <div className="card-body">{children}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  }

  // Define the Button component
  function Button({ children, onClick, color }) {
    return (
      <button className={`button button-${color}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  // Define the Badge component
  function Badge({ children, color }) {
    return <span className={`badge badge-${color}`}>{children}</span>;
  }
  // Fetch userRole from the server
  // Dashboard.js

  // fetch("http://localhost:8080/isAuth", {
  //   method: "GET",
  //   credentials: "include",
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error.message);
  //   });
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [tags, setTags] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [supportForms, setSupportForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchAllData();
  // }, []);

  // const fetchAllData = async () => {
  //   setLoading(true);
  //   try {
  //     const newsResponse = await axios.get("/api/news");
  //     const categoriesResponse = await axios.get("/api/categories");
  //     const typesResponse = await axios.get("/api/types");
  //     const tagsResponse = await axios.get("/api/tags");
  //     const usersResponse = await axios.get("/api/users");
  //     const rolesResponse = await axios.get("/api/roles");
  //     const supportFormsResponse = await axios.get("/api/support-forms");
  //     setNews(newsResponse.data);
  //     setCategories(categoriesResponse.data);
  //     setTypes(typesResponse.data);
  //     setTags(tagsResponse.data);
  //     setUsers(usersResponse.data);
  //     setRoles(rolesResponse.data);
  //     setSupportForms(supportFormsResponse.data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteNews = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/news/${id}`);
  //     setNews(news.filter((news) => news._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteCategory = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/categories/${id}`);
  //     setCategories(categories.filter((category) => category._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteType = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/types/${id}`);
  //     setTypes(types.filter((type) => type._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteTag = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/tags/${id}`);
  //     setTags(tags.filter((tag) => tag._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteUser = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/users/${id}`);
  //     setUsers(users.filter((user) => user._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteRole = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/roles/${id}`);
  //     setRoles(roles.filter((role) => role._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const deleteSupportForm = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`/api/support-forms/${id}`);
  //     setSupportForms(supportForms.filter((form) => form._id !== id));
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };
  return (
    <div>
      <div className="p-4 mt-16 dashboard">
        {/* Overview Statistics */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Overview Statistics:</h2>
          <ul className="list-disc list-inside">
            <li>Total number of news articles.</li>
            <li>Number of published articles.</li>
            <li>Number of drafts.</li>
          </ul>
        </section>

        {/* Recent Activities */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Recent Activities:</h2>
          <ul className="list-disc list-inside">
            <li>Display a list of recently published articles.</li>
            <li>Show recently drafted articles.</li>
          </ul>
        </section>

        {/* Categories and Tags */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Categories and Tags:</h2>
          <ul className="list-disc list-inside">
            <li>Display the most used categories and tags.</li>
            <li>
              Provide a quick overview of the distribution of articles across
              categories.
            </li>
          </ul>
        </section>

        {/* User Engagement */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">User Engagement:</h2>
          <ul className="list-disc list-inside">
            <li>
              Display statistics on user engagement, such as the number of
              comments on articles.
            </li>
            <li>Highlight popular articles based on user interactions.</li>
          </ul>
        </section>

        {/* Moderation Queue */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Moderation Queue:</h2>
          <ul className="list-disc list-inside">
            <li>
              If your clone allows user comments, display a moderation queue for
              pending comments.
            </li>
            <li>
              Provide options to approve or reject comments directly from the
              dashboard.
            </li>
          </ul>
        </section>

        {/* Content Creation */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Content Creation:</h2>
          <ul className="list-disc list-inside">
            <li>Quick links or shortcuts to create new articles.</li>
            <li>Notifications for articles in progress or pending review.</li>
          </ul>
        </section>

        {/* Analytics */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Analytics:</h2>
          <ul className="list-disc list-inside">
            <li>
              If available, integrate with analytics tools to display traffic
              data.
            </li>
            <li>Show popular articles based on page views.</li>
          </ul>
        </section>

        {/* News Trends */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">News Trends:</h2>
          <ul className="list-disc list-inside">
            <li>
              Display trending topics or keywords based on recent articles.
            </li>
            <li>Highlight articles that are gaining popularity.</li>
          </ul>
        </section>

        {/* Notification Center */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Notification Center:</h2>
          <ul className="list-disc list-inside">
            <li>Display system notifications or alerts.</li>
            <li>
              Provide updates on system status or important announcements.
            </li>
          </ul>
        </section>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cards</h1>
        {/* <div className="grid grid-cols-3 gap-4">
          <Card>
            <Card.Header>News</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">Total News: {news.length}</p>
              <p className="text-sm text-gray-600">
                Latest News:{" "}
                {news.length > 0 ? news[news.length - 1].title : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Categories</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">
                Total Categories: {categories.length}
              </p>
              <p className="text-sm text-gray-600">
                Latest Category:{" "}
                {categories.length > 0
                  ? categories[categories.length - 1].name
                  : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Types</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">
                Total Types: {types.length}
              </p>
              <p className="text-sm text-gray-600">
                Latest Type:{" "}
                {types.length > 0 ? types[types.length - 1].name : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Tags</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">Total Tags: {tags.length}</p>
              <p className="text-sm text-gray-600">
                Latest Tag:{" "}
                {tags.length > 0 ? tags[tags.length - 1].name : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Users</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">
                Total Users: {users.length}
              </p>
              <p className="text-sm text-gray-600">
                Latest User:{" "}
                {users.length > 0 ? users[users.length - 1].username : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Roles</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">
                Total Roles: {roles.length}
              </p>
              <p className="text-sm text-gray-600">
                Latest Role:{" "}
                {roles.length > 0 ? roles[roles.length - 1].name : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Support Forms</Card.Header>
            <Card.Body>
              <p className="text-lg font-semibold">
                Total Support Forms: {supportForms.length}
              </p>
              <p className="text-sm text-gray-600">
                Latest Support Form:{" "}
                {supportForms.length > 0
                  ? supportForms[supportForms.length - 1].subject
                  : "None"}
              </p>
            </Card.Body>
            <Card.Footer>
              <Button brand="primary">View All</Button>
            </Card.Footer>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
