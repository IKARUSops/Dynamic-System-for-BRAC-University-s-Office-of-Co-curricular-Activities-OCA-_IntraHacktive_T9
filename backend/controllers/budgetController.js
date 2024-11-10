import BudgetRequest from '../models/BudgetRequest.js';  // Import your BudgetRequest model

// Create a new budget request
export const createBudgetRequest = async (req, res) => {
  try {
    // Destructure data from the request body
    const { clubId, eventId, budgetDetails, status } = req.body;

    // Create a new BudgetRequest instance
    const newBudgetRequest = new BudgetRequest({
      club: clubId,
      event: eventId,
      budgetDetails,  // array of {description, amount}
      status: status || 'pending'  // Default to 'pending' if no status is provided
    });

    // Save the new budget request to the database
    await newBudgetRequest.save();

    // Send a success response
    res.status(201).json({
      message: 'Budget Request Created',
      data: newBudgetRequest
    });
  } catch (err) {
    // Handle any errors
    console.error('Error creating budget request:', err);
    res.status(500).json({ message: 'Error creating budget request', error: err.message });
  }
};
