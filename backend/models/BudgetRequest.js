const budgetRequestSchema = new Schema({
  club: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  budgetDetails: [{
    description: { type: String, required: true },
    amount: { type: Number, required: true }
  }],
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }
}, {
  timestamps: true
});

const BudgetRequest = mongoose.model('BudgetRequest', budgetRequestSchema);
export default BudgetRequest;
