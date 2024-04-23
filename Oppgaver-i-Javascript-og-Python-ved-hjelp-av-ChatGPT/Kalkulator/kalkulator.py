import re

def evaluate_expression(expression):
    try:
        result = eval(expression)
        return result
    except Exception as e:
        return str(e)

def main():
    print("Welcome to the Algebraic Calculator!")
    print("Enter an algebraic expression or type 'exit' to exit.")

    while True:
        expression = input("Enter expression: ")

        if expression.lower() == "exit":
            print("Exiting...")
            break

        # Check if the expression is valid (contains only allowed characters)
        if re.match(r'^[0-9\s+\-*/().\^xX]+$', expression):
            result = evaluate_expression(expression)
            print("Result:", result)
        else:
            print("Invalid expression! Please enter a valid algebraic expression.")

if __name__ == "__main__":
    main()
