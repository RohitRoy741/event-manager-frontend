import React from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Filters from "./Components/Filters";
import { Spinner} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    let datesTemp = [];
    // Use the below code for random dates 
    // let startDate = new Date();
    // let endDate = new Date(2021,6,25); 
    // for(let i=0;i<10;i++) {
    //   let date = new Date(startDate.getTime() + Math.random()*(endDate.getTime() - startDate.getTime()))
    //   datesTemp.push(date);
    // }
    datesTemp = [ new Date(2021,5,27),new Date(2021,5,29),new Date(2021,6,1),new Date(2021,6,14),
      new Date(2021,6,31),new Date(2021,7,20),new Date(2021,7,31),new Date(2021,8,15),new Date(2021,10,17),
      new Date(2021,11,10)]
    this.state = {
      data: null,
      name: "",
      city: "",
      company: "",
      eventDate : [new Date()],
      filteredData: [],
      searchValue: "",
      filterKey: "name",
      dates : datesTemp,
      isFilterApplied: false,
      isDataLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDateFilter = this.handleDateFilter.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
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
    for(let date of this.state.dates) {
      console.log((date-(new Date()))/(1000*60*60*24), (date-(new Date()))/(1000*60*60*24) <= 7);
    }
    
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
      date: new Date(this.state.eventDate[0])
    };
    let events = this.state.data.concat([event]);
    this.setState({
      data: events,
      filteredData: events,
      name: "",
      city: "",
      company: "",
      eventDates: [new Date()]
    });
    let postEvent = {
      name: this.state.name,
      city: this.state.city,
      company: this.state.company,
      date: new Date(this.state.eventDate[0])
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postEvent)
    };
    fetch('https://salamander-event-manager.herokuapp.com/events', requestOptions)
        .then(response => response.json())
        .then((result) => console.log(result));
  }
  
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     let events = [];
    //     for(let i=0;i<10;i++) {
    //       let event = result[i];
    //       event.date = this.state.dates[i];
    //       events.push(event);
    //     }
    //     return events;
    //   })
    //   .then( events => {
    //     this.setState({
    //       data: events,
    //       filteredData: events,
    //       isDataLoaded: true,
    //     });
    //   });
      fetch("https://salamander-event-manager.herokuapp.com/events")
        .then((response) => response.json())
        .then((result) => {
          let newEvents = [];
          let i = 0;
          for(let item of result) {
            let event  = {
              id : i++,
              name: item.name,
              address: {
                city: item.city
              },
              company: {
                name: item.company
              },
              date: new Date(item.date)
            };
            newEvents.push(event);
          }
          console.log(newEvents);
          return newEvents;
        })
        .then( newEvents => {
          this.setState(state => ({
            data: newEvents,
            filteredData: newEvents,
            isDataLoaded: true
          }))
        })      
  }
  render() {
    let events = [];
    if (this.state.isDataLoaded) {
      events = this.state.filteredData.map((event, index) => {
        return <MainContent key={event.id} data={event} date={event.date.toDateString()}/>;
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
    //console.log(this.state.eventDate[0].toDateString());
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
      </div>
    );
  }
}

export default App;
