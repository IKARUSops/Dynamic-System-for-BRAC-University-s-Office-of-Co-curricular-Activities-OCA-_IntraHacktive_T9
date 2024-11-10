import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema } = mongoose;

// User Schema with Subtypes for Student, OCAEmployee, and Faculty
const userSchema = new Schema({
  name: { type: String, required: true },
  gsuit: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: { type: String, enum: ["Student", "OCAEmployee", "Faculty"], required: true },
  club_id: [{ type: Schema.Types.ObjectId, ref: 'Club' }],
  
  // Additional fields for Students
  username: { 
    type: String, 
    required: function() { return this.user_type === 'Student'; },  // Make required only for students
    unique: true,  
    trim: true,  
  },

  role: { type: String, enum: ["club_member", "club_leader"] },
  club_positions: [{
    club_id: { type: Schema.Types.ObjectId, ref: 'Club' },
    position: { type: String, enum: ["member", "leader"] }
  }],
  
  // Additional fields for OCAEmployee
  position: { type: String, enum: ["Room Allocator", "Finance Manager", "Approval Manager"] },
  department: { type: String },
  responsibilities: [{ type: String }],
  
  // Additional fields for Faculty
  faculty_role: { type: String, enum: ["supervisor", "non_supervisor"] },
  supervised_clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
}, {
  timestamps: true
});

// Password hashing middleware
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model('User', userSchema);

// ESM export
export default User;
