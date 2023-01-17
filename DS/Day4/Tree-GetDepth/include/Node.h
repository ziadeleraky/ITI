#ifndef NODE_H
#define NODE_H

class Node
{
    public:

        int Data;
        Node *Left, *Right;

        Node(int data)
        {
            Data = data;
            Left = Right = NULL;
        }


    protected:

    private:
};

#endif // NODE_H
