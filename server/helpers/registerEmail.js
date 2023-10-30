exports.registerEmail =(username)=>{
    return(
        `<table align="center" cellpadding="10" cellspacing="0" style="background-color:#24292f; border-collapse:collapse; box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1); color:#ffffff; margin-top:20px; padding:60px; width:600px">
	<tbody>
		<tr>
			<td>
			<h1>Welcome to Our E-commerce Website!</h1>

			<p>Dear ${username}</p>

			<p>We are excited to have you as a new member of our online shopping community. Thank you for choosing us for your shopping needs.</p>

			<p>Here are some of the benefits you can enjoy:</p>

			<ul>
				<li>Wide selection of products</li>
				<li>Competitive prices</li>
				<li>Fast and secure checkout</li>
				<li>Excellent customer support</li>
			</ul>

			<p>Start shopping now and discover the latest trends and amazing deals!</p>
			<a href="https://example.com/shop" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #ffffff; text-decoration: none; font-size: 18px; border-radius: 5px; margin-top: 20px;">Shop Now</a></td>
		</tr>
		<tr>
			<td>
			<p>If you have any questions or need assistance, feel free to contact our friendly support team. We&#39;re here to help!</p>

			<p>Thank you for choosing [Your E-commerce Website Name]. Happy shopping!</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#007bff">
			<p style="margin-left:0; margin-right:0">Follow us on social media:</p>
			<a href="#" style="color: #ffffff; text-decoration: none; margin-right: 10px;">Facebook</a> <a href="#" style="color: #ffffff; text-decoration: none; margin-right: 10px;">Twitter</a> <a href="#" style="color: #ffffff; text-decoration: none; margin-right: 10px;">Instagram</a></td>
		</tr>
	</tbody>
</table>`

    )
}