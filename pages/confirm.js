import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import Link from 'next/link'
import mapboxgl, { accessToken } from 'mapbox-gl'
import { useRouter } from 'next/router'

const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query

    console.log("Pickup: " +pickup + " Drop off: "+ dropoff)

    const [pickupCoordinates, setPickupCooordinates ] = useState([0,0])
    const [dropoffCoordinates, setDropoffCooordinates ] = useState([0,0]) 

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGFwYWxpbmRyb21lIiwiYSI6ImNrdmxvaXlpeDA5azkydHFmbmRxbzdoMmMifQ.8BoXVDMkLCLpN2Wvgk1kRw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPickupCooordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGFwYWxpbmRyb21lIiwiYSI6ImNrdmxvaXlpeDA5azkydHFmbmRxbzdoMmMifQ.8BoXVDMkLCLpN2Wvgk1kRw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCooordinates(data.features[0].center);
        })
    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup, dropoff])

    return (
        <Wrapper>
            <Link href="/search">
                <BackButtonContainer>
                    <BackImage src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </BackButtonContainer>
            </Link>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
        
                <RideSelector 
                    pickupCoordinates = {pickupCoordinates}
                    dropoffCoordinates = {dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Uber
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`

const BackButtonContainer = tw.div`
    absolute bg-white rounded-full m-3 w-10 z-50 cursor-pointer shadow-xl
`
const BackImage = tw.img`
    w-10 transform hover:scale-105
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButton = tw.div`
    bg-black text-white text-center m-4 py-4 text-lg cursor-pointer transform hover:scale-95
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
