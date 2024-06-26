import decoration_img from "../assets/Decoration.svg";
import {useEffect, useState} from "react";
import Pagination from "./Pagination.jsx";
import supabase from "../../configuration/supabaseClient.js";

export default function FundAndOrg() {

    // const fundationDescription = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    //
    // const organizationDescription = "W naszej bazie znajdziesz listę zweryfikowanych Organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    //
    // const localsDescription = "W naszej bazie znajdziesz listę zweryfikowanych Lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";

    const fundationData = [
        {
            id: 1,
            title: "Fundacja 'Dbam o Zdrowie'",
            description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },

        {
            id: 2,
            title: "Fundacja 'Dla dzieci'",
            description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            items: "ubrania, meble, zabawki",
        },

        {
            id: 3,
            title: "Fundacja 'Bez domu'",
            description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            items: "ubrania, jedzenie, ciepłe koce",
        },

        {
            id: 4,
            title: "Fundacja 'Pomagam'",
            description: "Cel i misja: Pomoc dla osób potrzebujących.",
            items: "ubrania, jedzenie, ciepłe koce, środki higieniczne",
        },

        {
            id: 5,
            title: "Fundacja 'Dbam o Rodzinę'",
            description: "Cel i misja: Pomoc dla wielodzietnych rodzin.",
            items: "ubrania, jedzenie, ciepłe koce, środki higieniczne, produkty dla dzieci",
        },

        {
            id: 6,
            title: "Fundacja 'Dbam'",
            description: "Cel i misja: Pomoc osobom w kryzysie bezdomności.",
            items: "ubrania, jedzenie, ciepłe koce, środki higieniczne",
        },

        {
            id: 7,
            title: "Fundacja 'Razem raźniej'",
            description: "Cel i misja: Pomoc osobom chorym.",
            items: "ubrania, jedzenie, ciepłe koce, środki higieniczne",
        },

        {
            id: 8,
            title: "Fundacja 'Dbam o Siebie'",
            description: "Cel i misja: Pomoc osobom samotnym.",
            items: "ubrania, jedzenie, ciepłe koce, środki higieniczne",
        },

        {
            id: 9,
            title: "Fundacja 'Dbam o najmłodszych'",
            description: "Cel i misja: Pomoc osobom najmłodszym dzieciom z dysfunkcjami ruchowymi.",
            items: "ubrania, środki apteczne",
        },
    ]

    const organizationData = [
        {
            id: 1,
            title: "Organizacja “Lorem Ipsum 1”",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus",
        },

        {
            id: 2,
            title: "Organizacja “Lorem Ipsum 2”",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet",
        },

        {
            id: 3,
            title: "Organizacja “Lorem Ipsum 3”",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Scelerisque in dictum non consectetur a erat nam.",
        },

        {
            id: 4,
            title: "Organizacja “Lorem Ipsum 4”",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Scelerisque in dictum non consectetur a erat nam.",
        },

        {
            id: 5,
            title: "Organizacja “Lorem Ipsum 5”",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet",
        },

        {
            id: 6,
            title: "Organizacja “Lorem Ipsum 6”",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus",
        },

    ]


    const localsData = [
        {
            id: 1,
            title: "Zbiórka “Lorem Ipsum 1”",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus",
        },

        {
            id: 2,
            title: "Zbiórka “Lorem Ipsum 2”",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet",
        },

        {
            id: 3,
            title: "Zbiórka “Lorem Ipsum 3”",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Mi, quis, hendrerit, dolor",
        },
    ]

    const [description, setDescription] = useState([]);
    const [data, setData] = useState(fundationData);
    const [activeBtn, setActiveBtn] = useState("fundation")


    useEffect(() => {
        supabase
            .from('main_description')
            .select('*')
            .order('order', { ascending: true })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.map((single) => (
                    single.description
                )))
                if (response.error) {
                    throw new Error("Unable to get main_description data " + response.error)
                }
                // setDescription(response.data)
                const myData = response.data.map((single) => (
                    single.description))


                setDescription(myData[2])
            })
    }, []);


    const handleFundation = () => {
        setDescription(fundationDescription);
        setData(fundationData);
        setActiveBtn("fundation");
    }
    const handleOrganization = () => {
        setDescription(organizationDescription);
        setData(organizationData);
        setActiveBtn("organization");
    }
    const handleLocals = () => {
        setDescription(localsDescription);
        setData(localsData);
        setActiveBtn("locals");
    }

    return (
        <div id="fund-and-org-section" className="fund-and-org-section">

            <div className="help-header">
                <h3>Komu pomagamy?</h3>
                <img src={decoration_img} alt="decoration" className="header-decor"/>
            </div>

            <div className="help-info">
                <button className={"single-button " + (activeBtn === "fundation" ? 'active' : '')} onClick={handleFundation} >Fundacjom</button>
                <button className={"single-button " + (activeBtn === "organization" ? 'active' : '')} onClick={handleOrganization}>Organizacjom<br/>pozarządowym</button>
                <button className={"single-button " + (activeBtn === "locals" ? 'active' : '')} onClick={handleLocals}>Lokalnym<br/>zbiórkom</button>
            </div>

             <Pagination data={data} description={description}></Pagination>
        </div>
    )
}