import React from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Filters from "./Components/Filters";
import { Spinner, Modal, Form, Button} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      _id: "",
      id: 0,
      name: "",
      city: "",
      company: "",
      eventDate : [new Date()],
      filteredData: [],
      searchValue: "",
      filterKey: "name",
      isFilterApplied: false,
      isDataLoaded: false,
      show: false,
      bannerEvent : {
        date: new Date(),
        company: {
          name: 'company'
        }
      }
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
  }
  handleChange(name,value){
    if(name==="date") {
      console.log(value);
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.filterKey==="city") {
      let events = this.state.data.filter((event) =>{
        return event.address.city.toLowerCase().includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true
      });
    } else if(this.state.filterKey==="company") {
      let events = this.state.data.filter((event) =>{
        return event.company.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true
      });
    } else if(this.state.filterKey==="name") {
      let events = this.state.data.filter((event) =>{
        return event.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
      });
      this.setState({
        filteredData: events,
        searchValue: "",
        filterKey: "name",
        isFilterApplied: true
      }); 
    }
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        filteredData: prevState.data,
        isFilterApplied: false
      }
    });
  }
  handleDateFilter(e) {    
    if(e.target.value==="allTime") {
      this.setState(state => ({
        filteredData: state.data
      }))
    } else if(e.target.value==="thisWeek") {
      let events = this.state.data.filter(event => {
        return (event.date-(new Date()))/(1000*60*60*24) <= 7;
      })
      this.setState({
        filteredData: events
      })
    } else if(e.target.value==="thisMonth") {
      let events = this.state.data.filter(event => {
        return event.date.getMonth() === (new Date()).getMonth();
      })
      this.setState({
        filteredData: events
      })
    } else if(e.target.value==="in3Months") {
      let events = this.state.data.filter(event => {
        return (event.date-(new Date()))/(1000*60*60*24) <= 120;
      })
      this.setState({
        filteredData: events
      })
    }
  }
  handleAddEvent(e) {
    let {name, value} = e.target;
    if(name==="date") {
      this.setState({
        eventDate: [value]
      })
    }
    else {
      this.setState({
        [name]: value
      })
    }
  }
  createEvent(e) {
    e.preventDefault();
    let event = {
      id: this.state.data.length + 1,
      name: this.state.name,
      address: {
        city: this.state.city
      },
      company: {
        name: this.state.company
      },
      date: new Date(this.state.eventDate[0]),
      img: `https://source.unsplash.com/collection/4482145/700x600/?sig=${this.state.data.length+1}`
    };
    let events = this.state.data.concat([event]);
    let postEvent = {
      name: this.state.name,
      city: this.state.city,
      company: this.state.company,
      date: new Date(this.state.eventDate[0])
    };
    this.setState({
      data: events,
      filteredData: events,
      name: "",
      city: "",
      company: "",
      eventDates: [new Date()]
    });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postEvent)
    };
    fetch('https://salamander-event-manager.herokuapp.com/events', requestOptions)
        .then(response => response.json())
        .then((result) => console.log(result));
  }
  handleShow(id, _id, data, date) {
    this.setState({
      id: id,
      _id: _id,
      show: true,
      name: data.name,
      city: data.address.city,
      company: data.company.name,
      eventDate: [new Date(date)]
    });
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  updateEvent(e) {
    e.preventDefault();
    let event = {
      id: this.state.id,
      name: this.state.name,
      address: {
        city: this.state.city
      },
      company: {
        name: this.state.company
      },
      date: new Date(this.state.eventDate[0]),
      img: this.state.data[this.state.id].img
    };
    let events = [];
    for(let i=0; i<this.state.data.length; i++) {
      if(i !== this.state.id) {
        events.push(this.state.data[i]);
      } else {
        events.push(event);
      }
    }
    this.setState({
      data: events,
      filteredData: events
    });
    let patchEvent = {
      name: this.state.name,
      city: this.state.city,
      company: this.state.company,
      date: new Date(this.state.eventDate[0])
    };
    console.log(patchEvent, this.state._id, this.state.id);
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchEvent)
    };
    fetch('https://salamander-event-manager.herokuapp.com/events/'+this.state._id, requestOptions)
        .then(response => response.json())
        .then((result) => console.log(result));
  }
  deleteEvent(_id, id) {
    let events = this.state.data.filter((event) => event.id !== id);
    this.setState({
      data: events,
      filteredData: events
    });
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('https://salamander-event-manager.herokuapp.com/events/'+_id, requestOptions) 
        .then(response => response.json())
        .then(result => console.log(result));
  }
  componentDidMount() {
      fetch("https://salamander-event-manager.herokuapp.com/events")
        .then((response) => response.json())
        .then((result) => {
          let newEvents = [];
          let targetEvent = {};
          let date = new Date(2027, 11, 30);
          let i = 0;
          for(let item of result) {
            let event  = {
              _id: item._id,
              id : i++,
              name: item.name,
              address: {
                city: item.city
              },
              company: {
                name: item.company
              },
              date: new Date(item.date),
              img: `https://source.unsplash.com/collection/4482145/700x600/?sig=${i}`
            };
            if(event.date < date) {
              targetEvent = event;
              date = event.date;
            }
            newEvents.push(event);
          }
          return {newEvents, targetEvent};
        })
        .then( eventObj => {
          this.setState(state => ({
            data: eventObj.newEvents,
            filteredData: eventObj.newEvents,
            isDataLoaded: true,
            bannerEvent: eventObj.targetEvent
          }))
        })      
  }
  render() {
    let events = [];
    if (this.state.isDataLoaded) {
      events = this.state.filteredData.map((event, index) => {
        return <MainContent 
        key={index}
        data={event}
        date={event.date.toDateString()}
        handleShow={this.handleShow}
        deleteEvent = {this.deleteEvent}
        />;
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
        <Header inputValue={this.state.searchValue}
         handleChange={this.handleChange}
         filterKey={this.state.filterKey}
         handleSubmit={this.handleSubmit}
         isFilterApplied={this.state.isFilterApplied}
         handleReset={this.handleReset}
         handleAddEvent = {this.handleAddEvent}
         name = {this.state.name}
         city = {this.state.city}
         company = {this.state.company}
         date = {this.state.eventDate[0]}
         createEvent = {this.createEvent}
         targetEventName = {this.state.bannerEvent.name}
         targetEventDate = {this.state.bannerEvent.date.toDateString()}
         targetEventCompany = {this.state.bannerEvent.company.name}
         timeout = {this.state.bannerEvent.date.toString()}
         image = {this.state.bannerEvent.img}
        />
        <div className="main-content">
          <div className="filter-div">
            <Filters handleChange={this.handleDateFilter}/>
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
            <Form onSubmit={(e) => {
                this.handleClose();
                this.updateEvent(e);
            }}>
                <Modal.Header closeButton>
                <Modal.Title>Event Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Name of event" name="name" value={this.state.name} onChange={this.handleAddEvent}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Company" name="company" value={this.state.company} onChange={this.handleAddEvent}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" name="city" value={this.state.city} onChange={this.handleAddEvent}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="datetime-local" placeholder="Date" name="date" value={this.state.date} onChange={this.handleAddEvent}></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" type="submit">Submit</Button>
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

export default App;
