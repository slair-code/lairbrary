<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>The Lairbrary</title>
  <style>
    /* === BASIC RESET === */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Georgia, serif; /* Cozy serif font */
      background-color: #f5f1e7;    /* Cream background */
      color: #2f2f2f;               /* Default text color */
      line-height: 1.6;
    }

    /* === HEADER === */
    header {
      background-color: #2b3a42;   /* Dark navy blue */
      color: #f5f1e7;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 5px solid #d9a441; /* Mustard-orange accent */
    }

    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: 1px;
    }

    nav a {
      color: #f5f1e7;
      text-decoration: none;
      margin-left: 1.5rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #d9a441; /* Mustard-orange hover */
    }

    /* === HERO SECTION === */
    .hero {
      background: #a8bba2; /* Sage green background */
      padding: 6rem 2rem;
      text-align: center;
      color: white;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      letter-spacing: 2px;
    }

    .hero p {
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
    }

    /* === CONTENT SECTION === */
    .section {
      padding: 3rem 2rem;
      text-align: center;
    }

    .section h2 {
      color: #2b3a42; /* Navy for heading */
      margin-bottom: 1rem;
    }

    .section p {
      max-width: 600px;
      margin: 0 auto;
    }

    /* === FOOTER === */
    footer {
      background-color: #796657;  /* Rustic brown */
      color: #f5f1e7;
      text-align: center;
      padding: 1rem 2rem;
      font-size: 0.9rem;
    }

    /* === MEDIA QUERIES (optional) === */
    @media (max-width: 600px) {
      .hero h1 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <div class="logo">The Lairbrary</div>
    <nav>
      <a href="survey.html">Find Your Book</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Welcome to The Lairbrary</h1>
    <p>A cozy corner of the web for book lovers who crave the spark that makes reading feel like coming home. I believe books are shelter. They teach, transform, and give us a place to belong. After years of studying literature and nurturing young readers in schools, I’ve built The Lairbrary as a reading refuge. You answer a short, meaningful questionnaire—and I recommend books chosen with intention and care. Whether you’re burned out, curious, grieving, or hungry for something new—this is where your next chapter begins.

</p>
  </section>

  <section class="section">
    <h2>My Philosophy</h2>
    <p>
     If you’ve ever stared at a shelf, a screen, or a stack and thought: “None of these feel right”—that’s where I come in. I’ve made it my calling to help readers find the right book at the right time. With years of academic training, literary obsession, and school librarian magic, I can guide you to 5–10 titles you didn’t even know you were craving. You just answer a few soulful questions—and the lair opens up.
    </p>
  </section>

  <footer>
    &copy; 2025 The Lairbrary · Designed with warmth and wonder
  </footer>

</body>
</html>
