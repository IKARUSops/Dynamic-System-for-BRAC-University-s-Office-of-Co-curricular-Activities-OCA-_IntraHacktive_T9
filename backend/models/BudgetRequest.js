const budgetRequestSchema = new Schema({
    club: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    description: String
  }, {
    timestamps: true
  });
  
  const BudgetRequest = mongoose.model('BudgetRequest', budgetRequestSchema);
  export default BudgetRequest;
  