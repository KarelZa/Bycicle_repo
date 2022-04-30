import { useState } from 'react';
import TotalPrice from './TotalPrice';
//Bootstrap CSS styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Component uses 2 Arrays from Parent (array with bikes and days)
function Bikes({ bikesArr, daysArr }) {
	// State of inputs in form , done through list of objects
	const [inputList, setInputList] = useState([
		{
			numOfBikes: 0,
			priceOfBike: 0,
			numOfDays: 0,
		},
	]);
	// State of extra features (racks)
	const [extra, setExtra] = useState(0);
	// Total stores summary of prices from the form based on inputs
	const total = inputList.reduce(
		(totalBikesPrice, bike) => totalBikesPrice + bike.numOfDays * bike.priceOfBike * bike.numOfBikes,
		0
	);
	// onChange handler method , that  update value of item in the list
	// e ==> event 
	// index ==> number of item in the list
	const handleChange = (e, index) => {
		const { name, value } = e.target; // passing correct information from event
		const list = [...inputList]; // creating copy of current list
		list[index][name] = value; // inputing new value to the correct item(object) and property in list
		setInputList(list); // updating state of list with new values
	};
	// onClick handler method, that adds new object into list
	const handleAddInput = () => {
		setInputList([...inputList, { numOfBikes: 0, priceOfBike: 0, numOfDays: 0 }]);
		// Another method how to push new object into list:
		// const list = [...inputList];
		// list.push({ numOfBikes: '', priceOfBike: '', numOfDays: '' });
		// setInputList(list);
	};
	// onClick handler method, that removes object from list
	const handleRemoveInput = (index) => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	return (
		<div className='container'>
			<div className='row  text-light'>
				<div className='col'>
					<h1 className='text-center display-3 myBoldHeading py-2'>KarZa Bicycles</h1>
				</div>
			</div>
			{inputList.map((item, index) => {
				return (
					<div key={index} className='row  text-light text-center align-items-center  fs-md-4  py-1 '>
						<div className='col-1  col-md-auto offset-md-1 me-2'>
							<span className='fs-3'>Rent</span>
						</div>
						<div className='col-2 col-md-1 offset-1 offset-md-0 px-2 me-3 me-md-0 '>
							<input
								className='form-control px-0 px-md-2 text-center py-2 fs-4 bg-dark text-light border-0 ownNumInput'
								type='number'
								min='0'
								name='numOfBikes'
								value={item.numOfBikes}
								onChange={(e) => handleChange(e, index)}
							/>
						</div>
						<div className='col-7 col-md-3'>
							<select
								className='form-select border-0 text-light py-2 fs-4'
								name='priceOfBike'
								value={item.priceOfBike}
								onChange={(e) => handleChange(e, index)}
							>
								{bikesArr.map((bike) => (
									<option value={bike.price}>{bike.name}</option> // sets value of option and name from object
								))}
							</select>
						</div>
						<div className='col-1 col-md-auto mt-2 mt-md-0'>
							<span className='d-md-inline fs-3'>for</span>
						</div>
						<div className='mt-2 col-10 offset-1 offset-md-0 px-3 col-md-3 mt-md-0 '>
							<select
								className='form-select mySelect border-0 text-light py-2 fs-4'
								name='numOfDays'
								value={item.numOfDays}
								onChange={(e) => handleChange(e, index)}
							>
								{daysArr.map((day) => (
									<option value={day.number}>{day.placeHolder}</option> // sets value of option and placeHolder string from object
								))}
							</select>
						</div>
						{/* BUTTONS ADD and REMOVE */}
						<div className='col-auto mt-2 mt-md-0'>
							{inputList.length !== 1 && (
								<input
									className='btn btn-lg text-light  myBtn btn-minus'
									type='button'
									value='-'
									onClick={() => handleRemoveInput(index)}
								/>
							)}
						</div>
						<div className='row'>
							<div>
								{inputList.length - 1 === index && inputList.length < 4 && (
									<input
										className='btn mt-4 fs-1 p-0  myBtn btn-plus'
										type='button'
										value='+'
										onClick={handleAddInput}
									/>
								)}
							</div>
						</div>
					</div>
				);
			})}
			<div className='row  mt-3'>
				<div className='typeOfRack fs-5 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mx-auto '>
					<h4 className='py-3 fs-2'>Choose Bicycle rack</h4>
					<div className='form-check'>
						<input
							className='form-check-input'
							value='0'
							type='radio'
							name='extraFeature'
							id='rack3'
							onChange={(e) => setExtra(e.target.value)}
							defaultChecked='true'
						/>
						<label className='form-check-label' for='rack3'>
							<b>Not needed</b>
						</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							value='5'
							type='radio'
							name='extraFeature'
							onChange={(e) => setExtra(e.target.value)}
							id='rack1'
						/>
						<label className='form-check-label' for='rack1'>
							<b>Rooftop</b> (+5% of total price)
						</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							value='10'
							type='radio'
							name='extraFeature'
							id='rack2'
							onChange={(e) => setExtra(e.target.value)}
						/>
						<label className='form-check-label' for='rack2'>
							<b>Towbar</b> (+10% of total price)
						</label>
					</div>
				</div>
			</div>
			{/* Custom component , passing value of total(price) and value of extra state */}
			<TotalPrice total={total} extra={extra} />
		</div>
	);
}

export default Bikes;
