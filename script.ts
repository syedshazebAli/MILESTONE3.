document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and display area
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    if (!form) {
        console.error('The form element is missing.');
        return;
    }

    if (!resumeDisplayElement) {
        console.error('The resume display element is missing.');
        return;
    }

    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // prevent page reload

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value || '';
        const education = (document.getElementById('education') as HTMLInputElement | null)?.value || '';
        const experience = (document.getElementById('experience') as HTMLInputElement | null)?.value || '';
        const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value || '';

        // Generate the resume content dynamically
        const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
});
