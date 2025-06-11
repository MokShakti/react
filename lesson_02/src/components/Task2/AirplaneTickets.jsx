import './AirplaneTickets.scss'; import { Link } from 'react-router-dom';

import { useState } from "react";

function TicketSelector() {
   const [ticketType, setTicketType] = useState('')
   const [wantsCognac, setWantsCognac] = useState(false)
   const [cognacSnack, setCognacSnack] = useState('')

   // const [newspaper, setNewspaper] = useState('')
   // const [beer, setBeer] = useState('')
   // const [chips, setChips] = useState('')

   const handleTicketTypeChange = (e) => {
      setTicketType(e.target.value)
      setWantsCognac(false)
      setCognacSnack('')
   }

   const handleCognacChange = (e) => {
      setWantsCognac(e.target.value === 'yes')
   }

   const handleSnackChange = (e) => {
      setCognacSnack(e.target.value)
   }

   const renderBusinessOptions = () => (
      <>
         <div className="ticket-form-group">
            <label className="choose-newspaper">
               Choose Newspaper:
            </label>
            <select defaultValue="">
               <option value='' disabled>Choose</option>
               <option value='forbes'>Forbes</option>
               <option value='ft'>Financial Times</option>
               <option value='guardian'>The Guardian</option>
            </select>
         </div>

         <div>
            <label className="ticket-form-group">
               Do you want some cognac?
            </label>
            <select defaultValue='' onChange={handleCognacChange}>
               <option value="" disabled>Choose</option>
               <option value='yes'>
                  Yes
               </option>
               <option value='no'>
                  No
               </option>
            </select>
         </div>

         {wantsCognac && (
            <div className="ticket-form-group">
               <label className="pos-neg">Some snacks with cognac, so you will not get drunk?
               </label>
               <select defaultValue='' onChange={handleSnackChange}>
                  <option value="" disabled>Choose</option>
                  <option>Yes, please</option>
                  <option>No, I am alcoholic</option>
               </select>
            </div>
         )}
      </>
   )

   const renderEconomyOptions = () => (
      <>
         <div className="ticket-form-group">
            <label className="beer-type">
               Beer Type:
            </label>
            <select defaultValue=''>
               <option value="" disabled>Choose</option>
               <option value='heineken'>Heineken</option>
               <option value='corona'>Corona</option>
               <option value='bud'>Bud</option>
            </select>
         </div>

         <div className="ticket-form-group">
            <label className="chips">
               Chips:
            </label>
            <select defaultValue=''>
               <option value='pringles'>Pringles</option>
               <option value='lays'>Lays</option>
               <option value='none'>No chips</option>
            </select>
         </div>
      </>
   )

   return (
      <div className='airplane-ticket-box'>
         <div className="ticket-box">
            <label htmlFor="tickets">Select the ticket type</label>
            <select
               value={ticketType}
               onChange={handleTicketTypeChange}
               className="ticket-select"
            >
               <option value="">
                  Choose
               </option>
               <option value="business">
                  Business Class
               </option>
               <option value="economy">
                  Economy Class
               </option>
            </select>

            {ticketType === 'business' && (
               <>
                  {renderBusinessOptions()}
                  {cognacSnack && <p className="snack-choice">{cognacSnack}</p>}
               </>
            )}
            {ticketType === 'economy' && renderEconomyOptions()}
         </ div >
      </div>
   );
}

export default TicketSelector;