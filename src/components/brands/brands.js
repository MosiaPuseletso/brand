import React, { useEffect, useState } from "react";
import axios from "axios";

function Brands() {
    // State variables for brands data and the selected filter option
    const [brands, setBrands] = useState(null);
    const [select, setSelect] = useState('default');

    // Function to handle changes in the select dropdown
    const handleSelect = async (event) => {
        setSelect(event.target.value);
    }

    // Function to format the data received from the API response
    const formatData = (data) => {
        let newData = data.data.map((brand) => {
            // Convert SVG data to a data URI
            const svgString = String.fromCharCode.apply(null, brand.image.data.data);
            const svgDataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;
            return ({
                name: brand.name,
                industry: brand.industry,
                image: svgDataUri
            })
        })

        return newData;
    }

    // Effect hook to fetch data from the API based on the selected filter option
    useEffect(() => {
        const URL = "http://localhost:5000/brands";

        // Conditional logic to determine the API endpoint based on the selected filter option
        if (select === 'filterFinance') {
            axios.get(URL + "/filter/finance").then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        } else if (select === 'filterTech') {
            axios.get(URL + "/filter/tech").then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        } else if (select === 'filterOther') {
            axios.get(URL + "/filter/other").then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        } else if (select === 'default') {
            axios.get(URL).then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        } else if (select === 'nameAsc') {
            axios.get(URL + "/sort/asc").then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        } else if (select === 'nameDesc') {
            axios.get(URL + "/sort/desc").then(response => {
                let brandsData = formatData(response);
                setBrands(brandsData);
            }).catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
        }
    }, [select]);


    return (
        <div className="brands">
            <div className="brands-heading">
                <span></span>
                <h4>You'll be in good company</h4>
                <select id="sortSelect" value={select} onChange={handleSelect}>
                    <option value="default">Default</option>
                    <option value="nameAsc">Sort Name (A-Z)</option>
                    <option value="nameDesc">Sort Name (Z-A)</option>
                    <option value="filterFinance">Filter by Finance</option>
                    <option value="filterTech">Filter by Tech</option>
                    <option value="filterOther">Filter by Other</option>
                </select>
            </div>
            <div className="brands-description">
                <h2>Trusted by leading brands</h2>
            </div>
            <div className="brands-content">
                {
                    brands && brands.map((brand, index) => (
                        <div key={index} className="brand">
                            <img src={brand.image} width="100px" height="100px" alt={brand.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brands;