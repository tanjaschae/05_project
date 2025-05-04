import os
import sys

def main():
    name = os.getenv("INPUT_NAME", "stranger")
    greeting = f"Hello, {name} 👋"

    # Output to GitHub Actions
    with open(os.getenv("GITHUB_OUTPUT"), "a") as f:
        f.write(f"greeting={greeting}\n")

    print(greeting)

if __name__ == "__main__":
    main()
