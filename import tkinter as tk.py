import tkinter as tk

def update_label(event=None):
    text = entry.get()
    label.config(text=text * 10)

root = tk.Tk()
root.title("Text Repeater")

# Create an entry widget at the top
entry = tk.Entry(root)
entry.pack(side=tk.TOP, fill=tk.X, padx=10, pady=10)
entry.bind("<Return>", update_label)

# Create a label in the middle
label = tk.Label(root, text="", font=("Arial", 24))
label.pack(expand=True)

# Update label when text in entry changes
entry.bind("<KeyRelease>", update_label)

root.mainloop()