function TotalPrice({ total, extra }) {
	let rackExtra = (total * extra) / 100; // calculates extra feature's price

	return (
		<div>
			<div className='totalPrice row py-4'>
				{/*  displays total price including extra feature's price  */}
				<h3 className='text-center display-5 myBoldHeading py-2 px-5'>
					Total&nbsp;price: <b>{total + rackExtra}</b>&nbsp;CZK
				</h3>
			</div>
		</div>
	);
}

export default TotalPrice;
