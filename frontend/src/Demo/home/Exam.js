import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import axios from 'axios';

function Exam(props){

	const[questions, setQuestions] = useState([])
	const[loading, setLoading] = useState(false)

	useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
	    	const params = {
	    		lesson__id:props.match.params.id
	    	}
	      let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/question/`, {params})
	      setQuestions(results.data.results);
	      setLoading(false)
	    }

	    fetchMyAPI()
	}, [])

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswer2OptionClick = (answerVal) => {
		if (answerVal ===  questions[currentQuestion].answer){
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

    return (
        <Aux>
        	<Row>
                <Col>
                	<Card style={{ marginTop: '-30px' }}>
                		<Card.Header style={{textAlign: 'center'}}>
                            <Card.Title as="h5">Exam Questions</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ marginBottom: '45px'}}>
                        	<div className='vls-question'>
								{showScore ? (
									<div className='score-section'>
										You scored {score} out of {questions.length}
									</div>
								) : (
									<>
										<div className='question-section'>
											<div className='question-count text-success'>
												<span>Question {currentQuestion + 1}</span>/{questions && questions.length}
											</div>
											<div className='question-text'>{questions && questions[currentQuestion] && questions[currentQuestion].question}</div>
										</div>
										<div className='answer-section'>
										{questions && questions[currentQuestion] && (
											<>
												<button onClick={() => handleAnswer2OptionClick(questions[currentQuestion].option_one)}>{questions[currentQuestion].option_one}</button>
												<button onClick={() => handleAnswer2OptionClick(questions[currentQuestion].option_two)}>{questions[currentQuestion].option_two}</button>
												<button onClick={() => handleAnswer2OptionClick(questions[currentQuestion].option_three)}>{questions[currentQuestion].option_three}</button>
												<button onClick={() => handleAnswer2OptionClick(questions[currentQuestion].option_four)}>{questions[currentQuestion].option_four}</button>
											</>
										)}
										</div>
									</>
								)}
							</div>
                        </Card.Body>
                	</Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Exam;