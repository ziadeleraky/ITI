#ifndef NODE_H
#define NODE_H


class Node
{
    // Each Node has 3 parts (Data, Previous Node, Next Node)
    public:
        int Data;
        // Prev will refer to the previous NODE
        // Next will refer to the next NODE
        Node *Prev, *Next;

        Node(int data)
        {
            Data = data;
            Prev = Next = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
