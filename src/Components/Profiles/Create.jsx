import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions";
import validate from "../assets/validate";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import "../assets/profiles.css";

const Create = ({ token }) => {
  const [displayName, setDisplayName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [sign, setSign] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [sexuality, setSexuality] = useState(undefined);
  const [seeking, setSeeking] = useState(undefined);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState("");
  const [citySet, setCitySet] = useState(false);

  const [country, setCountry] = useState("");
  

  validate.location(location !== undefined ? location : "");
  let dispatch = useDispatch();
  let body = document.querySelector("body");
  body.style.background =
    "url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
  body.style.maxHeight = "1000vh";

  const newProfile = async (e) => {
    e.preventDefault();

    dispatch(
      updateProfile({
        displayName,
        age,
        sign,
        location,
        sexuality,
        seeking,
        images,
      })
    );

    let response = await fetch(`http://localhost:8080/4857/create`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authentication: token,
      }),
      body: JSON.stringify({
        displayName,
        age,
        sign,
        location,
        sexuality,
        seeking,
      }),
    });
    let json = await response.json();
    console.log(json);

    images.forEach(async (link) => {
      let res = await fetch(`http://localhost:8080/9423/create`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authentication: token,
        }),
        body: JSON.stringify({
          link,
        }),
      });
      let jsonify = await res.json();
      console.log(jsonify);
    });
  };

  const upload = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    data.append("file", files[0]);
    data.append("upload_preset", "t4timages");

    setLoading(true);

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/teafortea/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    let copy = [...images];
    copy.push(file.secure_url);
    setImages(copy);

    let labels = document.querySelectorAll("label.button");
    let input = document.querySelectorAll("input.image");
    let image = document.createElement("img");

    labels.forEach((_, i) => {
      return input[i].value.length === 0
        ? ""
        : (labels[i].innerHTML = "Change file");
    });
  };

  const create = {
    backgroundColor: "#a2d2ff",
    width: "80%",
    marginLeft: "10vw",
    padding: "1%",
  };

  const autofill = async (e) => {
    if(e.target.name === 'country'){
      setCountry(e.target.value)
      
    } else if(e.target.name === 'city') {

    }



  //   setCity([])
  //   setCitySet(false)
  //  console.log(e.target)
  //  if(e.target.name === 'country') {
  //    setCountry(e.target.value)
  //   let cityArr = cities.map(item => {
  //     return item[0].includes(e.target.value) ? item[1].map((city) => {
  //       return city.name
  //     }) : ''
  //    }).filter(item => item && item.length > 0)
  //    setCity(cityArr)
  //    console.log(cityArr)
  //    setCitySet(true)
  //    setTimeout(() => {
  //      console.log(city)
  //    },10000)
  //  } else if(e.target.name === 'city'){
  //    setCity(e.target.value)
  //  }
  };

  const countryInfo = async () => {
    let urls = [
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=2",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=3",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=4",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=5",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=6",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=7",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=8",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=9",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=10",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=11",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=12",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=13",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=14",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=15",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=16",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=17",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=18",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=19",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=20",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=21",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=22",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=23",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=24",
      "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities?page=25",
    ];

    // Creating a request from each url, and appending the necessary headers
    let requests = urls.map((url) => {
      let request = new Request(url, {
        method: "GET",
        headers: new Headers({
          "x-rapidapi-host": "countries-states-cities-dataset.p.rapidapi.com",
          "x-rapidapi-key":
            "894dd9d2a9mshc076e5c81b0afd1p14164ejsnf67e35b7e0c4",
        }),
      });
      return fetch(request).then((res) => res.json());
    });

    // resolving each request
    let response = await Promise.all(requests);

    // creating a new array with only the information needed in a multidimensional array
    let location_data = response.map((country, i) => {
      return country.data.result.data;
    })

 
    let flattened = location_data.reduce((end, current) => {
      return end.concat(current);
    }, []);


    let cities = flattened.map(countryInfo => {
      return [countryInfo.name, countryInfo.cities]
    })

    flattened = flattened.map((current, i) => {
      return current.name;
    });

   
    setCities(cities)
    setLocationData(flattened);
  };

  useEffect(() => {
    countryInfo();
  }, []);

  useEffect(() => {});

  return (
    <div>
      { locationData.length !== undefined ? (
        
         <div style={{ marginTop: "1vh" }} >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => newProfile(e)}
            style={create}
          >
            <h1 style={{ color: "#f7ede2" }}>Create a Profile</h1>
            <TextField
              className="textfield"
              id="displayName"
              label="Display Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <br />
            <TextField
              className="textfield"
              id="age"
              label="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <TextField
              className="textfield"
              id="sign"
              label="Sign"
              onChange={(e) => setSign(e.target.value)}
            />
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="country"
                    value={country}
                    label="Country"
                    onChange={autofill}
                  >{
                    locationData.map((current, i) => {
                      return <MenuItem key={i} value={current}>{current}</MenuItem>
                    })
                  }</Select>
                </FormControl>
              </Box>
              <div>

              {/* {
                citySet ?
                  <div><Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="city"
                      value={city}
                      label="City"
                      onChange={autofill}
                    >{
                      cities.map((current, i) => {
                        return <MenuItem key={i} value={current}>{current.name}</MenuItem>
                      })
                    }</Select>
                  </FormControl>
                </Box></div> : <div><h1>enter a country to enter a city</h1></div>
              } */}
              
            </div>
            </div>
            <br />
            <TextField
              className="textfield"
              id="sexuality"
              label="Sexuality"
              onChange={(e) => setSexuality(e.target.value)}
            />
            <br />
            <TextField
              className="textfield"
              id="seeking"
              label="Seeking"
              onChange={(e) => setSeeking(e.target.value)}
            />
            <br />
            <div>
              <div className="image-input">
                <div className="container">
                  <div className="button-wrap">
                    <label className="button" htmlFor="upload1">
                      Upload File
                    </label>
                    <input
                      id="upload1"
                      className="image"
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                      onChange={(e) => upload(e)}
                    />
                  </div>
                </div>

                <div className="container">
                  <div className="button-wrap">
                    <label className="button" htmlFor="upload2">
                      Upload File
                    </label>
                    <input
                      id="upload2"
                      className="image"
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                      onChange={(e) => upload(e)}
                    />
                  </div>
                </div>

                <div className="container">
                  <div className="button-wrap">
                    <label className="button" htmlFor="upload3">
                      Upload File
                    </label>
                    <input
                      id="upload3"
                      className="image"
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                      onChange={(e) => upload(e)}
                    />
                  </div>
                </div>

                <div className="container">
                  <div className="button-wrap">
                    <label className="button" htmlFor="upload4">
                      Upload File
                    </label>
                    <input
                      id="upload4"
                      className="image"
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                      onChange={(e) => upload(e)}
                    />
                  </div>
                </div>

                <div className="container">
                  <div className="button-wrap">
                    <label className="button" htmlFor="upload5">
                      Upload File
                    </label>
                    <input
                      id="upload5"
                      className="image"
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                      onChange={(e) => upload(e)}
                    />
                  </div>
                </div>
              </div>
              <br />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Create;
