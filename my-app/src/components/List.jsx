import { connect } from "react-redux";

function List(props) {
  return (
    <div>
      <h2>List</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.app.users,
  error: state.errors.error,
});

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;
