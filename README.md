# Waffor-Retail-Solution


---

### 1️⃣ **client-package.json**  
📄 **Purpose:** Defines basic app metadata.  
📌 **Key Points:**  
- `"name": "sampleApp"` → The app's name.  
- `"version": "0.0.1"` → The app’s version.  
- `"homepage": "index.html"` → Specifies the main entry file.

---

### 2️⃣ **index.html**  
📄 **Purpose:** The main webpage structure.  
📌 **Key Sections:**  
- **Header Section** → Displays the salon name, location, and ratings.  
- **Sidebar (Left Panel)** → Lists different service categories (Hair, Beauty, Spa, etc.).  
- **Main Content (Middle Panel)** → Displays available services with checkboxes for selection.  
- **Cart Section (Right Panel)** → Shows selected services and total cost.  
- **Booking Page** → Allows users to select staff, date, and time.  
- **Payment & Confirmation** → Users can enter details, choose payment, and confirm booking.  

👉 **Bootstrap is used** for layout, icons, and responsiveness.

---

### 3️⃣ **main.css & style.css**  
📄 **Purpose:** Styling for the website.  
📌 **Key Styles:**  
- **Theme Colors:**  
  - `--primary-color: #20B2AA;` (light sea green for highlights)  
  - `--bg-dark: #1A202C;` (dark theme for the header)  
- **Service Selection:**  
  - `.service-category.active` → Highlights selected service.  
  - `.service-checkbox.checked` → Adds a ✅ checkmark inside the selection box.  
- **Cart Section:**  
  - `.cart-section` → Styles the cart display.  
  - `.book-now-btn` → Styles the booking button.  
- **Responsive Design:**  
  - The sidebar hides on smaller screens.  
  - The cart section moves to the bottom for mobile views.  

---

### 4️⃣ **script.js**  
📄 **Purpose:** Controls user interactions.  
📌 **Key Functionalities:**  
- **Service Selection:**  
  - Clicking a checkbox toggles selection (`.checked` class).  
- **Cart Management:**  
  - Dynamically updates the cart when services are selected.  
- **Date & Time Selection:**  
  - Clicking a date/time highlights the selection.  
- **Payment Option Handling:**  
  - Allows users to choose between "Minimum" and "Full Payment."  
- **Form Submission:**  
  - Captures user details when they submit the booking.  

---

### 🔥 **Summary:**  
Your project is a **fully functional salon booking system** with service selection, staff selection, scheduling, cart management, and payment integration. It’s built using **HTML, Bootstrap (CSS), JavaScript (for interactivity), and responsive design**.

Do you need an explanation of any specific part? 😊
