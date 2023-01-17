#ifndef NODE_H
#define NODE_H

class Node
{
    public:
        int Data;
        Node *Next;

        Node(int data)
        {
            Data = data;
            Next = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
