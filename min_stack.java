//https://leetcode.com/problems/min-stack/
public class MinStack {
    Stack<Integer> stack;
    int min = Integer.MAX_VALUE; 
    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack<>();
    }
    
    public void push(int x) {
        if(x<=this.min) {
            this.stack.push(this.min);
            this.min = x;
        }
        this.stack.push(x);
    }
    
    public void pop() {
        int x = this.stack.peek();
        if(x==this.min) {
            this.stack.pop();
            this.min = this.stack.pop();
        } else {
            this.stack.pop();            
        }
    }
    
    public int top() {
         return this.stack.peek();
    }
    
    public int getMin() {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */