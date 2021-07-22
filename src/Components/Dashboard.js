import React from "react";
import axios from "axios";
import Header from "./Header";
import MainContent from "./MainContent";
import Filters from "./Filters";
import { removeUserSession, getToken, getUser } from "../Utils/Common";
import { Spinner, Modal, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      _id: "",
      id: 0,
      name: "",
      city: "",
      company: "",
      eventDate: [new Date()],
      filteredData: [],
      searchValue: "",
      filterKey: "name",
      isFilterApplied: false,
      isDataLoaded: false,
      show: false,
      bannerEvent: {
        date: new Date(),
        company: {
          name: "company",
        },
      },
      allData: null,
      schedule: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDateFilter = this.handleDateFilter.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.notify = this.notify.bind(this);
    this.addRSVP = this.addRSVP.bind(this);
    this.removeRSVP = this.removeRSVP.bind(this);
    this.showSchedule = this.showSchedule.bind(this);
    this.showEvents = this.showEvents.bind(this);
  }
  handleChange(name, value) {
    if (name === "date") {
      console.log(value);
    } else {
      this.setState({
        [name]: value,
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.filterKey === "city") {
      let events = this.state.data.filter((event) => {
        return event.address.city
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true,
      });
    } else if (this.state.filterKey === "company") {
      let events = this.state.data.filter((event) => {
        return event.company.name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true,
      });
    } else if (this.state.filterKey === "name") {
      let events = this.state.data.filter((event) => {
        return event.name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true,
      });
    }
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        filteredData: prevState.data,
        isFilterApplied: false,
      };
    });
  }
  handleDateFilter(e) {
    if (e.target.value === "allTime") {
      this.setState((state) => ({
        filteredData: state.data,
      }));
    } else if (e.target.value === "thisWeek") {
      let events = this.state.data.filter((event) => {
        return (event.date - new Date()) / (1000 * 60 * 60 * 24) <= 7;
      });
      this.setState({
        filteredData: events,
      });
    } else if (e.target.value === "thisMonth") {
      let events = this.state.data.filter((event) => {
        return event.date.getMonth() === new Date().getMonth();
      });
      this.setState({
        filteredData: events,
      });
    } else if (e.target.value === "in3Months") {
      let events = this.state.data.filter((event) => {
        return (event.date - new Date()) / (1000 * 60 * 60 * 24) <= 120;
      });
      this.setState({
        filteredData: events,
      });
    }
  }
  handleAddEvent(e) {
    let { name, value } = e.target;
    if (name === "date") {
      this.setState({
        eventDate: [value],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }
  createEvent(e) {
    e.preventDefault();
    let event = {
      id: this.state.data.length,
      name: this.state.name,
      address: {
        city: this.state.city,
      },
      company: {
        name: this.state.company,
      },
      date: new Date(this.state.eventDate[0]),
      img: `https://source.unsplash.com/collection/4482145/700x600/?sig=${
        this.state.data.length + 1
      }`,
    };
    let events = this.state.allData.concat([event]);
    this.setState({
      allData: events,
      data: events,
      filteredData: events,
      name: "",
      city: "",
      company: "",
      eventDates: [new Date()],
    });
    this.notify("Event Created Successfully");
    let postEvent = {
      name: this.state.name,
      city: this.state.city,
      company: this.state.company,
      date: new Date(this.state.eventDate[0]),
    };
    const token = getToken();
    axios
      .post(
        "https://salamander-event-manager.herokuapp.com/v1/events",
        postEvent,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        console.log(result);
        let events = this.state.data;
        events[events.length - 1]._id = result.data._id;
        this.setState({
          allData: events,
          data: events,
          filteredData: events,
          name: "",
          city: "",
          company: "",
          eventDates: [new Date()],
        });
      });
  }
  handleShow(id, _id, data, date) {
    console.log(id, _id);
    this.setState({
      id: id,
      _id: _id,
      show: true,
      name: data.name,
      city: data.address.city,
      company: data.company.name,
      eventDate: [new Date(date)],
    });
  }
  handleClose() {
    this.setState({
      show: false,
    });
  }
  updateEvent(e) {
    e.preventDefault();
    let image, r;
    for (let event of this.state.allData) {
      if (event.id === this.state.id) {
        image = event.img;
        r = event.rsvp;
        break;
      }
    }
    let event = {
      id: this.state.id,
      name: this.state.name,
      address: {
        city: this.state.city,
      },
      company: {
        name: this.state.company,
      },
      date: new Date(this.state.eventDate[0]),
      img: image,
      rsvp: r,
    };
    let allEvents = [];
    for (let i = 0; i < this.state.allData.length; i++) {
      if (this.state.allData[i].id !== this.state.id) {
        allEvents.push(this.state.allData[i]);
      } else {
        allEvents.push(event);
      }
    }
    let events = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id !== this.state.id) {
        events.push(this.state.data[i]);
      } else {
        events.push(event);
      }
    }
    let filteredEvents = [];
    for (let i = 0; i < this.state.filteredData.length; i++) {
      if (this.state.filteredData[i].id !== this.state.id) {
        filteredEvents.push(this.state.data[i]);
      } else {
        filteredEvents.push(event);
      }
    }
    this.setState({
      allData: allEvents,
      data: events,
      filteredData: filteredEvents,
    });
    this.notify("Event Updated Successfully");
    let patchEvent = {
      name: this.state.name,
      city: this.state.city,
      company: this.state.company,
      date: new Date(this.state.eventDate[0]),
    };
    console.log(patchEvent, this.state._id, this.state.id);
    const token = getToken();
    axios
      .patch(
        "https://salamander-event-manager.herokuapp.com/v1/events/" +
          this.state._id,
        patchEvent,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        let event = {
          _id: response.data._id,
          id: this.state.id,
          name: this.state.name,
          address: {
            city: this.state.city,
          },
          company: {
            name: this.state.company,
          },
          date: new Date(this.state.eventDate[0]),
          img: image,
          rsvp: r,
        };
        let allEvents = [];
        for (let i = 0; i < this.state.allData.length; i++) {
          if (this.state.allData[i].id !== this.state.id) {
            allEvents.push(this.state.allData[i]);
          } else {
            allEvents.push(event);
          }
        }
        let events = [];
        for (let i = 0; i < this.state.data.length; i++) {
          if (this.state.data[i].id !== this.state.id) {
            events.push(this.state.data[i]);
          } else {
            events.push(event);
          }
        }
        let filteredEvents = [];
        for (let i = 0; i < this.state.filteredData.length; i++) {
          if (this.state.filteredData[i].id !== this.state.id) {
            filteredEvents.push(this.state.data[i]);
          } else {
            filteredEvents.push(event);
          }
        }
        this.setState({
          allData: allEvents,
          data: events,
          filteredData: filteredEvents,
        });
      });
  }
  deleteEvent(_id, id) {
    console.log(_id);
    let events_one = this.state.allData.filter((event) => event.id !== id);
    let events_two = this.state.data.filter((event) => event.id !== id);
    let events_three = this.state.filteredData.filter(
      (event) => event.id !== id
    );
    this.setState({
      allData: events_one,
      data: events_two,
      filteredData: events_three,
    });
    this.notify("Event Deleted Successfully");
    const token = getToken();
    axios
      .delete(
        "https://salamander-event-manager.herokuapp.com/v1/events/" + _id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => console.log(result));
  }
  handleLogOut = () => {
    this.setState({
      isDataLoaded: false,
    });
    const token = getToken();
    axios
      .post(
        "https://salamander-event-manager.herokuapp.com/v1/users/logout",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        this.setState({
          isDataLoaded: true,
        });
        removeUserSession();
        this.props.history.push("/");
      })
      .catch((e) => console.log(e));
  };
  notify = (value) => {
    return toast.success(value, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  showSchedule() {
    let events = this.state.allData.filter((event) => event.rsvp);
    if (events.length === 0) {
      return this.notify("Your schedule is clear");
    } else {
      this.setState({
        data: events,
        filteredData: events,
        schedule: true,
      });
    }
  }
  showEvents() {
    this.setState((state) => {
      return {
        data: state.allData,
        filteredData: state.allData,
        schedule: false,
      };
    });
  }
  addRSVP(_id, id) {
    const eventsOne = this.state.filteredData;
    for (let event of eventsOne) {
      if (event.id === id) {
        event.rsvp = true;
      }
    }
    const eventsTwo = this.state.data;
    for (let event of eventsTwo) {
      if (event.id === id) {
        event.rsvp = true;
      }
    }
    const eventsThree = this.state.allData;
    for (let event of eventsThree) {
      if (event.id === id) {
        event.rsvp = true;
      }
    }
    this.setState({
      allData: eventsThree,
      data: eventsTwo,
      filteredData: eventsOne,
    });
    // this.notify('Event RSVP added!');
    const token = getToken();
    axios
      .post(
        "https://salamander-event-manager.herokuapp.com/v1/rsvp/add/" + _id,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }
  removeRSVP(_id, id) {
    console.log(id);
    let eventsOne = this.state.filteredData;
    for (let event of eventsOne) {
      if (event.id === id) {
        event.rsvp = false;
      }
    }
    let eventsTwo = this.state.data;
    for (let event of eventsTwo) {
      if (event.id === id) {
        event.rsvp = false;
      }
    }
    let eventsThree = this.state.allData;
    for (let event of eventsThree) {
      if (event.id === id) {
        event.rsvp = false;
      }
    }
    if (this.state.schedule) {
      eventsOne = eventsOne.filter((event) => event.id !== id);
      eventsTwo = eventsTwo.filter((event) => event.id !== id);
    }
    this.setState({
      allData: eventsThree,
      data: eventsTwo,
      filteredData: eventsOne,
    });
    if (this.state.schedule) {
      this.notify("Event RSVP removed!");
    }
    const token = getToken();
    axios
      .post(
        "https://salamander-event-manager.herokuapp.com/v1/rsvp/remove/" + _id,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }
  componentDidMount() {
    const token = getToken();
    const user = getUser();
    console.log(user);
    axios
      .get("https://salamander-event-manager.herokuapp.com/v1/events", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        result = result.data;
        console.log(result);
        let newEvents = [];
        let targetEvent = {};
        let date = new Date(2027, 11, 30);
        let i = 0;
        for (let item of result) {
          let rsvp = false;
          for (let attendee of item.attendees) {
            if (attendee._id.toString() === user._id.toString()) {
              rsvp = true;
              break;
            }
          }
          console.log(item.name, rsvp);
          let event = {
            _id: item._id,
            id: i++,
            name: item.name,
            address: {
              city: item.city,
            },
            company: {
              name: item.company,
            },
            date: new Date(item.date),
            img: `https://source.unsplash.com/collection/4482145/700x600/?sig=${i}`,
            rsvp,
          };
          if (event.date < date) {
            targetEvent = event;
            date = event.date;
          }
          newEvents.push(event);
        }
        return { newEvents, targetEvent };
      })
      .then((eventObj) => {
        this.setState((state) => ({
          allData: eventObj.newEvents,
          data: eventObj.newEvents,
          filteredData: eventObj.newEvents,
          isDataLoaded: true,
          bannerEvent: eventObj.targetEvent,
        }));
      });
  }
  render() {
    let events = [];
    if (this.state.isDataLoaded) {
      events = this.state.filteredData.map((event, index) => {
        return (
          <MainContent
            key={index}
            data={event}
            date={event.date.toDateString()}
            handleShow={this.handleShow}
            deleteEvent={this.deleteEvent}
            addRSVP={this.addRSVP}
            removeRSVP={this.removeRSVP}
          />
        );
      });
    }
    const Loader = (
      <Spinner
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          justifyContent: "center",
          width: "60px",
          height: "60px",
        }}
        animation="border"
        variant="primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header
          inputValue={this.state.searchValue}
          handleChange={this.handleChange}
          filterKey={this.state.filterKey}
          handleSubmit={this.handleSubmit}
          isFilterApplied={this.state.isFilterApplied}
          handleReset={this.handleReset}
          handleAddEvent={this.handleAddEvent}
          name={this.state.name}
          city={this.state.city}
          company={this.state.company}
          date={this.state.eventDate[0]}
          createEvent={this.createEvent}
          targetEventName={this.state.bannerEvent.name}
          targetEventDate={this.state.bannerEvent.date.toDateString()}
          targetEventCompany={this.state.bannerEvent.company.name}
          timeout={this.state.bannerEvent.date.toString()}
          image={this.state.bannerEvent.img}
          handleLogOut={this.handleLogOut}
          showSchedule={this.showSchedule}
          showEvents={this.showEvents}
        />
        <div className="main-content">
          <div className="filter-div">
            <Filters handleChange={this.handleDateFilter} />
          </div>
          <h3>Events</h3>
          <div className="card-list">
            {this.state.isDataLoaded ? events : Loader}
          </div>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Form
            onSubmit={(e) => {
              this.handleClose();
              this.updateEvent(e);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Event Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name of event"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleAddEvent}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleAddEvent}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleAddEvent}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="Date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleAddEvent}
                ></Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
