import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Dashboard = () => {
	// keeps track of authors from database-> an array of objects
	const [authors, setAuthors] = useState([]);

	// for modal popup
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	// get authors on load
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/authors`)
			.then((res) => setAuthors(res.data));
	});

	const removeFromList = (authorId) => {
		setAuthors(authors.filter((author) => author._id !== authorId));
	};

	const handleDelete = (authorId) => {
		axios
			.delete(`http://localhost:8000/api/authors/${authorId}`)
			.then((res) => removeFromList(authorId))
			.catch((err) => console.log(err));
	};

	return (
		<div className="mt-3">
			<Link to="/authors/new" className='btn btn-primary'>Add an Author</Link>
			<table className="table table-hover mx-auto" style={{ width: "600px" }}>
				<thead>
					<tr>
						<th>Author</th>
						<th>Action Available</th>
					</tr>
				</thead>
				<tbody>
					{
						// sort -> alphabetically
						authors
							.sort((a, b) => (a.name > b.name ? 1 : -1))
							.map((author, i) => {
								return (
									<tr key={i}>
										<td style={{ verticalAlign: "bottom" }}>
											<Link to={`/authors/${author._id}`} style={{ fontSize: "18px" }}>{author.name}</Link>
										</td>
										<td>
											<div className="btn-group">
												<Link to={`/authors/${author._id}/edit`} className='btn btn-success'>Edit</Link>

												<Button variant="danger" onClick={handleShow}>
													Delete
												</Button>

												<Modal show={show} onHide={handleClose}>
													<Modal.Header closeButton>
														<Modal.Title>Delete Confirmation</Modal.Title>
													</Modal.Header>
													<Modal.Body>Are you sure you want to delete this author?</Modal.Body>
													<Modal.Footer>
														<Button variant="secondary" onClick={handleClose}>
															Close
														</Button>
														<Button variant="primary" onClick={(e) => {
															handleDelete(author._id)
															handleClose()
														}}>
															Delete
														</Button>
													</Modal.Footer>
												</Modal>

											</div>
										</td>
									</tr>
								);
							})
					}
				</tbody>
			</table>

		</div>
	);
};

export default Dashboard;
