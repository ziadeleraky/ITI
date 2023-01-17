#ifndef NODE_H
#define NODE_H

class Node
{
    public:
        int Data;
        Node *Prev;

        Node(int data)
        {
            Data = data;
            Prev = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
